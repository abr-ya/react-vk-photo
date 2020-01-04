import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
  renderTemplate = () => {
    const {vkLoginHandler, name, error, isFetching} = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <p>Привет, {name}!</p>
    } else {
      return (
        <button className="btn" onClick={vkLoginHandler}>
          Подключиться к вконтакте
        </button>
      )
    }
  }
  render() {
    return (
      <div className='ib user'>
        {this.renderTemplate()}
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}
