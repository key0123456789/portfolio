class MainController < ApplicationController
  def index
    @message = Message.new
  end

  def done
    @message = Message.new(message_params)
    if @message.valid?
      MessageMailer.received_email(@message).deliver_now
      redirect_to root_path
    else
      render action: 'index'
    end
  end

  private
  def message_params
    params.require(:message).permit(:name, :email, :content)
  end
end
