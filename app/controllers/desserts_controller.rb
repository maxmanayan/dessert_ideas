class DessertsController < ApplicationController

  def app 
    render component: "App"
  end


  def index
    @desserts = Dessert.all

    render json: @desserts
  end


  def create
    @dessert = Dessert.create(dessert_params)
    render json: @dessert
  end


  def destroy
    @dessert = Dessert.find(params[:id])

    @dessert.destroy 
  end


  private

  def dessert_params
    params.require(:dessert).permit(:flavor, :variety, :topping, :likes)
  end

end
