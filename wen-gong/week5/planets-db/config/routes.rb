Rails.application.routes.draw do
  

   root to: 'planets#home'

   get '/planets/new' => 'planets#new', as: 'new_planet'

   post '/planets' => 'planets#create'

   get '/planets' => 'planets#index'

   get '/planets/:id' => 'planets#show', as: 'planet'

   get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet'


   patch '/planets/:id' => 'planets#update'

   get '/planets/:id/delete' => 'planets#destroy', as: 'destroy_planet'


end
