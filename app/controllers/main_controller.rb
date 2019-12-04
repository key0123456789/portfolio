class MainController < ApplicationController
  def index
    @message = Message.new
  end

  def done
    @message = Message.new(message_params)
    if @message.valid?
      render action: 'index'
    else
      MessageMailer.received_email(@message).deliver_now
    end
  end

  private
  def message_params
    params.require(:message).permit(:name, :email, :content)
  end
end
