import hasMatch from '../_internal/hasMatch';

export default hasMatch((node) => node.type === 'INSTANCE', true);
