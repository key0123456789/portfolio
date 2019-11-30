class MainController < ApplicationController
  def index
    @message = Message.new
  end

  def done
    @message = Message.new(message_params)
    if params[:back]
      render action: 'index'
    else
      MessageMailer.received_email(@message).deliver_now
    end
  end
end
