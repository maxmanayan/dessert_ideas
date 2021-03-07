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


  def update  
    @dessert = Dessert.find(params[:id])

    @dessert.update(dessert_params)

    render json: @dessert
  end 


  def destroy
    @dessert = Dessert.find(params[:id])

    @dessert.destroy 
  end



  def likes 
    @dessert = Dessert.find(params[:id])

    @dessert.update(dessert_params)

    render json: @dessert

    # redirect_to root_path
  end


  private

  def dessert_params
    params.require(:dessert).permit(:flavor, :variety, :topping, :likes)
  end

end
