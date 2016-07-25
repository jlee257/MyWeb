class CommentsController < ApplicationController

  def index
    @comments = Comment.all

    puts params[:pass]

    if params[:pass].present? && params[:pass] == "qwerty"
      respond_to do |format|
        format.html
      end
    else
      respond_to do |format|
        format.html { render "errors/not_found", status: 404 }
      end
    end
  end


  def create
    @new_comment = Comment.new(comment_params)

    if @new_comment.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to root_path }
        format.js
      end
    end
  end


  def show
    current_ip = request.remote_ip
    @comments = Comment.where(ip_address: current_ip)
  end


  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    respond_to do |format|
      format.html { redirect_to root_path }
      format.js
    end
  end



  private
  def comment_params
    params.require(:comment).permit(:name, :contact, :ip_address, :body)
  end

end
