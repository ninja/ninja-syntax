(function (console, Example) {
  Example.prototype.welcome = function (message, next) {
    if (message) {
      message = message.replace(/\./, '!');
    } else {
      message = 'Missing message parameter.';
    }

    if (typeof next === 'function') {
      next(message);
    } else {
      return message;
    }
  };

  var
    example = new Example(),
    message = example.title + ', world.';

  example.welcome(message, function (message) {
    if (console && console.log) {
      console.log(example.title + ' becomes: ' + message);
    }

    example.element.textContent = message;

    example.element.style.borderBottom = '1px solid red';
  });
}(window.console, window.Example));
