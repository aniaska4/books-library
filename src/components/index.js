import Button from './Button/Button.vue';
import Input from './Input/Input.vue';

export { Button };
export { Input };

const availableComponents = {
  'Button': Button,
  'Input': Input
};

export function mapComponents(components = []) {
  const result = {};

  components.forEach((name) => {
    if (name in availableComponents) {
      const componentName = `s-${name}`;

      console.log(componentName);

      result[componentName] = availableComponents[name];
    };
  });

  return result;
}