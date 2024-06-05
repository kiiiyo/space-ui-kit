import { Button } from '@/components/ui/button';

import clsx from 'clsx';

const styleClass = clsx('m-1');

const style2Class = clsx`
 p-1
 m-1
`;

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Button</Button>
      <div className={styleClass}>Sample</div>
      <div className={style2Class}>Sample2</div>
    </>
  );
}

export default App;
