class SampleMailer < ApplicationMailer
  def send_when_update
    mail to: "to@example.org"
  end
end
