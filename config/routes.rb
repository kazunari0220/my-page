Rails.application.routes.draw do
  get 'pages', to: 'pages#index'
  get 'profile', to: 'pages#profile'
  get 'works', to: 'pages#works'
  root 'pages#index'
end
