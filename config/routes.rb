Bracket::Application.routes.draw do
  get "/about", to: "pages#about"
  get '/_stylesheet', to: 'pages#stylesheet'
  resources :users

  root to: 'pages#index'
end
