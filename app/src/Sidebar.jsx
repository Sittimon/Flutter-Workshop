import { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import config from './config';

function Sidebar() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const header = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token_flutter')
        }
      };

      const res = await axios.get(config.apiPath + '/api/user/info', header);
      console.log(res.data);
      if (res.data.id !== undefined) {
        setName(res.data.name);
      }
    } catch (e) {
      Swal.fire({
        title: 'Error',
        text: e.message,
        icon: 'error'
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
        </div>
        <div className="info">
          <a href="#" className="d-block">{name}</a>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-header">เมนู</li>

          <li className="nav-item">
            <a href="/room" className="nav-link">
              <i className="nav-icon fas fa-ellipsis-h"></i>
              <p>ห้องพัก</p>
            </a>
          </li>

          {/* Menu Item 2 */}
          <li className="nav-item">
            <a href="https://adminlte.io/docs/3.1/" className="nav-link">
              <i className="nav-icon fas fa-file"></i>
              <p>รายการจองห้อง</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
