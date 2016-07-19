class WelcomeController < ApplicationController

  #GET /welcome

  def index
    respond_to do |format|
      format.html { render 'welcome/index'}
    end
  end

end
