Bracket::Application.routes.draw do
  get :login, to: 'sessions#new'
  post :login, to: 'sessions#create'
  delete :logout, to: 'sessions#destroy'

  resources :users do
    post :taken, on: :collection
  end

  get "/about", to: "pages#about"
  get '/_styleguide', to: 'pages#styleguide'

  root to: 'pages#index'
end

