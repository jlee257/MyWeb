class ErrorsController < ApplicationController

  def not_found
    render "errors/not_found", status: 404
  end

  def internal_server_error
    render "errors/internal_server_error", status: 500
  end
end
