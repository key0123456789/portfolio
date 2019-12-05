class MessageMailer < ApplicationMailer
  default to: ENV['EMAIL_ADDRESS'] # 送信先アドレス
 
  def received_email(message)
    @message = message
    mail(subject: '【Portfolio】メッセージが届きました') do |format|
      format.text
    end
  end
 
end