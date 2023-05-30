import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Se produjo un error en esta página.</h2>
          <p>Por favor, recarga la página e intenta nuevamente.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
