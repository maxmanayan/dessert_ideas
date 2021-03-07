Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "desserts#app"

  resources :desserts

  #custom route for likes

  put "/desserts/:id/likes", to: "desserts#likes"
end
