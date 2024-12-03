function MyModal(props) {
    return (
      <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" id={props.id + '_btnClose'}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MyModal;
  