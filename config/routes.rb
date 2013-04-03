Bracket::Application.routes.draw do
  get "sessions/new"
  get "/about", to: "pages#about"
  get '/_styleguide', to: 'pages#styleguide'
  resources :users
  post 'users/taken', to: 'users#taken'

  root to: 'pages#index'
end
