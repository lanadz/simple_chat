var MessageForm = React.createClass({
  onAddItems: function onAddItems(e) {
    var userName = this.userNameRef.value;
    var msgBody = this.bodyRef.value;

    this.props.callback(userName, msgBody);
  },

  renderErrors: function renderErrors() {
    if (Object.keys(this.props.errors).length > 0) {
      var errors = [];
      $.map(this.props.errors, function (value, key) {
        errors.push(
          <div key={key}>{key + " " + value}</div>
        )
      });

      return (
        <div className="alert alert-danger">{errors}</div>
      )
    }
  },

  render: function () {
    var bodyRef = function (input) {
      this.bodyRef = input;
    }.bind(this);

    var userNameRef = function (input) {
      this.userNameRef = input;
    }.bind(this);
    return (
      <div className="card new-message">
        <div className="card-header bg-inverse">
          Say something
        </div>
        {this.renderErrors()}
        <form>
          <div className="card-block">
            <div className="form-group">
              <input name="message_user" placeholder="User Name" className="form-control" ref={userNameRef}/>
            </div>

            <div className="form-group">
              <textarea name="message_body" placeholder="Your message..." rows="5" className="form-control" ref={bodyRef}/>
            </div>
          </div>

          <div className="card-footer">
            <button type="button" className="btn btn-success" onClick={this.onAddItems}>Send</button>
          </div>
        </form>
      </div>
    );
  }
});

