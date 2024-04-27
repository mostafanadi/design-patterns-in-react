/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'

type Props = {
  children: JSX.Element[]
}

const useChildProps = (children: JSX.Element[], whitelist: string[]) => {
  return useMemo(() => {
    ([] as JSX.Element[]).concat(children).reduce((childProps, child) => {
      if (whitelist && !whitelist.includes(child.type)) {
        throw Error(`element <${child.type}> is not supported`);
      }
      childProps[child.type] = child.props;
      return childProps;
    });

  }, [children])
}





const Title = () => {
  return (
    <div>THIS IS TITLE</div>
  )
}
export default function TemplateMethod({ children }: Props) {
  const childProps = useChildProps(children,
    ['Title',
      'Contents',
    ])
  return (
    <div>
      {
        childProps.Title && <Title />
      }
      {children}</div>
  )
}