import App from '../App';
import {connect} from 'react-redux';
import {setYear} from '../actions/PageActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  counter: state.counter,
  user: state.user,
  page: state.page,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  setYear,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
