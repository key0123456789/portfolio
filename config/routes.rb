Rails.application.routes.draw do
  root "main#index"

  resources :main, only: [:index] do
    collection do
      post 'send', to: "main#done"
    end
  end
  
  get  'test', to: 'messages#test'
  post 'confirm', to: 'messages#confirm'
  post 'done', to: 'messages#done'

  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
