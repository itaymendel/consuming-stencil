this project shows how to use a stencil component in stencil and react

## in stencil

```
cd stencil-project
pnpm i
pnpm start
```

see this file:

```
stencil-project/src/components/my-component/my-component.tsx
```

in line 2 we import `import '@frontend/stencil.examples.my-stencil-comp';` and in line 31 we use `return <div>Hello, World! I'm {this.getText()}<br />Bit component - <my-stencil-comp first="First" middle=", middle" last=", last"></my-stencil-comp> </div>;`

## in react

```
cd react-project
pnpm i
pnpm start
```

see this file:

```
react-project/src/App.tsx
```

in line 2 we import `import '@frontend/stencil.examples.my-stencil-comp';` and in lines 6-18 we define the type (this is only relevant with typescript)
```
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-stencil-comp': MyStencilCompProps
    }
  }
}

interface MyStencilCompProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  first?: string,
  middle?: string,
  last?: string
}
```
in linw 29 we use `Bit component <my-stencil-comp first="First" middle=", middle" last=", last"></my-stencil-comp>`
