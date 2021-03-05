class DessertsController < ApplicationController

  def app 
    render component: "App"
  end


  def index
    @desserts = Dessert.all

    render json: @desserts
  end


end
