Rails.application.routes.draw do

  get '/comment', to: "comments#index"
  post '/comment', to: "comments#create"
  delete '/comment/:id', to: "comments#destroy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'

  match '/404', to: 'errors#not_found', :via => :all
  match '/500', to: 'errors#internal_server_error', :via => :all

end
