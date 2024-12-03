import Template from "./Template";

function Room(){
    return(
        <Template>
            <div className="h3">ห้องพัก</div>
            <button 
            className="mt-3 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-traget="#modalRoom"
            >
            <i className="fa fa-plus me-2"></i>
            New Record
            </button>
        </Template>
    );
}

export default Room;