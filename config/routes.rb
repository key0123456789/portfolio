Rails.application.routes.draw do
  root "main#index"

  get  '', to: "main#index"
  post 'send', to: "main#done"
  
  get  'index' =>'messages#index'
  post 'confirm' => 'messages#confirm'
  post 'done' => 'messages#done'

  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
