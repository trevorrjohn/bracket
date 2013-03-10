Bracket::Application.routes.draw do
  get "/about", to: "pages#about"
  get '/_styleguide', to: 'pages#styleguide'
  resources :users

  root to: 'pages#index'
end
