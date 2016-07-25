class WelcomeController < ApplicationController

  #GET /welcome

  def index
    @new_comment = Comment.new
    @comments = Comment.where(ip_address: request.remote_ip)
    @comment_count = @comments.count
    respond_to do |format|
      format.html { render 'welcome/index'}
    end
  end

end
