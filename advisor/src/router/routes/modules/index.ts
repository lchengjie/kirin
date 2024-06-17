import dashboard from './dashboard';
import promotion from './promotion';
import fund from './fund';
import checkbook from './checkbook';
import customer from './customer';
import transaction from './transaction';
import payment from './payment';
import maintaiance from './maintaiance';
import externaLink from './externa-link';

export default [
  ...dashboard,
  ...checkbook,
  ...customer,
  ...fund,
  ...transaction,
  ...promotion,
  ...payment,
  ...maintaiance,
  ...externaLink,
];
