import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/offcanvas-navbar.css';
import { renderBoard } from './pages/dashboard/dashboard';
import { excuteLogin } from './pages/login/login';


renderBoard("#boardfirst");
excuteLogin();