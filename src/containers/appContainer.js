import App from '../App';
import {connect} from 'react-redux';
import {setYear} from '../actions/PageActions';
import {initAppSagaAction, loginSagaAction} from '../actions/SagaActions';
import {loginRequest, loginSuccess, loginFail} from '../actions/UserActions';
import {addPhoto} from '../actions/PhotoActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  user: state.user,
  page: state.page,
  photo: state.photo,
})

// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  setYear,
  initAppSagaAction, loginSagaAction,
  loginRequest, loginSuccess, loginFail,
  addPhoto,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
