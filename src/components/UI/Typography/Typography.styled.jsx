'use client'

// import styled from '@emotion/styled'
import clsx from 'clsx'
import { createElement } from 'react'
// import { nunito } from '@/utils/font'
// import { responsive } from '@/utils/response'

export function StyledTypographyUrbanistH1({
  children,
  className,
  component = 'h1',
  ...props
}) {
  return (
    <h1 {...props} className={clsx('title-1', className)}>
      {children}
    </h1>
  )
  // const TypographyUrbanistH1 = styled[component]`
  //   color: var(--directness-black, #2d3439);
  //
  //   font-size: 64px;
  //   ${nunito.style}
  //   font-weight: 400;
  //   line-height: 74px;
  //   letter-spacing: -1.28px;
  //   ${responsive.sm`
  //     font-size: 40px;
  //     line-height: 46px;
  //     font-weight: 700;
  //   `}
  // `
  // return createElement(
  //   component,
  //   {
  //     className: clsx('title-1', className),
  //     ...props,
  //   },
  //   children
  // )
  // (
  //   // <TypographyUrbanistH1 component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistH1>
  //   <p className={clsx('title-1', props.className)}>{children}</p>
  // )
}

export function StyledTypographyUrbanistH2({
  children,
  className,
  component = 'h2',
  ...props
}) {
  return (
    <h2 {...props} className={clsx('title-2', className)}>
      {children}
    </h2>
  )
  // const TypographyUrbanistH2 = styled[component]`
  //   color: var(--directness-black, #2d3439);
  //
  //   ${nunito.style}
  //
  //   font-size: 56px;
  //   font-weight: 400;
  //   line-height: 66px;
  //   ${responsive.sm`
  //     font-size: 40px;
  //     font-weight: 700;
  //     line-height: 50px;
  //   `}
  // `

  // return createElement(
  //   component,
  //   {
  //     className: clsx('title-2', className),
  //     ...props,
  //   },
  //   children
  // )
  // (
  //   <p className={clsx('title-2', props.className)}>{children}</p>
  //   // <TypographyUrbanistH2 component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistH2>
  // )
}

export function StyledTypographyUrbanistH3({
  children,
  className,
  component = 'h3',
  ...props
}) {
  // const TypographyUrbanistH3 = styled[component]`
  //   color: var(--directness-black, #2d3439);
  //   ${nunito.style}
  //
  //   font-size: 40px;
  //   font-weight: 400;
  //   line-height: 46px;
  //   ${responsive.sm`
  //     font-size: 32px;
  //     line-height: 42px;
  //     font-weight: 700;
  //   `}
  // `
  return (
    <h3 {...props} className={clsx('title-3', className)}>
      {children}
    </h3>
  )
  // return createElement(
  //   component,
  //   {
  //     className: clsx('title-3', className),
  //     ...props,
  //   },
  //   children
  // )
  // (
  //   // <TypographyUrbanistH3 component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistH3>
  //   <p className={clsx('title-3', className)}>{children}</p>
  // )
}

export function StyledTypographyUrbanistH4({
  children,
  component = 'h4',
  className,
  ...props
}) {
  // const TypographyUrbanistH4 = styled[component]`
  //   color: var(--directness-black, #2d3439);
  //   ${nunito.style}
  //
  //   font-size: 32px;
  //   font-weight: 400;
  //   line-height: 42px;
  //   ${responsive.sm`
  //     font-size: 24px;
  //     line-height: 34px;
  //   `}
  // `
  return createElement(
    component,
    {
      className: clsx('title-4', className),
      ...props,
    },
    children
  )
  // return (
  //   // <TypographyUrbanistH4 component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistH4>
  //   <p className={clsx('title-4', props.className)}>{children}</p>
  // )
}

export function StyledTypographyUrbanistH5({
  children,
  component = 'p',
  className,
  ...props
}) {
  // const TypographyUrbanistH5 = styled[component]`
  //   color: var(--directness-black, #2d3439);
  //   ${nunito.style}
  //
  //   font-size: 24px;
  //   font-weight: 400;
  //   line-height: 34px;
  //   ${responsive.sm`
  //     font-size: 18px;
  //     line-height: 22px;
  //   `}
  // `

  return createElement(
    component,
    {
      className: clsx('title-5', className),
      ...props,
    },
    children
  )
  // (
  //   // <TypographyUrbanistH5 component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistH5>
  //   <p className={clsx('title-5', props.className)}>{children}</p>
  // )
}

export function StyledTypographyUrbanistBody({
  children,
  component = 'p',
  className,
  ...props
}) {
  // const TypographyUrbanistBody = styled[component]`
  //   color: var(--directness-black, #2d3439);
  //   ${nunito.style}
  //
  //   font-size: 18px;
  //   font-weight: 400;
  //   line-height: 26px;
  // `
  return (
    <p {...props} className={clsx('paragraph', className)}>
      {children}
    </p>
  )
  // return createElement(
  //   component,
  //   {
  //     className: clsx('paragraph', className),
  //     ...props,
  //   },
  //   children
  // )
  // (
  //   // <TypographyUrbanistBody component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistBody>
  //   <p className={clsx('paragraph', props.className)}>{children}</p>
  // )
}

export function StyledTypographyUrbanistSmallSpaces({
  children,
  className,
  component = 'p',
  ...props
}) {
  return (
    <p {...props} className={clsx('title-small-spaces', className)}>
      {children}
    </p>
  )
  // const TypographyUrbanistSmallSpaces = styled[component]`
  //   ${nunito.style}
  //   color: var(--directness-black, rgba(45, 52, 57, 0));
  //   pointer-events: none;
  //
  //   font-size: 14px;
  //   font-weight: 500;
  //   line-height: 18px;
  // `
  // return createElement(
  //   component,
  //   {
  //     className: clsx('title-small-spaces', className),
  //     ...props,
  //   },
  //   children
  // )
  // (
  //   // <TypographyUrbanistSmallSpaces component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistSmallSpaces>
  //   <p className={clsx('title-small-spaces', props.className)}>{children}</p>
  // )
}

export function StyledTypographyUrbanistCTA({
  children,
  className,
  component = 'p',
  ...props
}) {
  return (
    <p {...props} className={clsx('title-cta', className)}>
      {children}
    </p>
  )
  // const TypographyUrbanistCTA = styled[component]`
  //   ${nunito.style}
  //   color: var(--ambitious-green, #077453);
  //
  //   font-size: 18px;
  //   font-weight: 700;
  //   line-height: 26px;
  // `

  // return createElement(
  //   component,
  //   {
  //     className: clsx('title-cta', className),
  //     ...props,
  //   },
  //   children
  // )
  // (
  //   // <TypographyUrbanistCTA component={component} {...props}>
  //   //   {children}
  //   // </TypographyUrbanistCTA>
  //   <p className={clsx('title-cta', props.className)}>{children}</p>
  // )
}

export function StyledTypographyIBMH4({
  children,
  className,
  component = 'p',
  ...props
}) {
  return (
    <p {...props} className={clsx('title-ibm-1', className)}>
      {children}
    </p>
  )
  // const TypographyIBMH4 = styled[component]`
  //   ${nunito.style}
  //   color: var(--ambitious-green, #077453);
  //
  //   font-size: 18px;
  //   font-weight: 700;
  //   line-height: 26px;
  // `
  // return createElement(
  //   component,
  //   {
  //     className: clsx('title-ibm-1', className),
  //     ...props,
  //   },
  //   children
  // )
  // (
  //   // <TypographyIBMH4 component={component} {...props}>
  //   //   {children}
  //   // </TypographyIBMH4>
  //   <p className={clsx('title-ibm-1', props.className)}>{children}</p>
  // )
}

export function StyledTypographyIBMH5({
  children,
  className,
  component = 'p',
  ...props
}) {
  // const TypographyIBMH5 = styled[component]`
  //   ${nunito.style};
  //   color: #272727;
  //
  //   font-size: 18px;
  //   font-weight: 400;
  //   line-height: 30px;
  //   letter-spacing: 2.4px;
  //   text-transform: uppercase;
  //   ${responsive.sm`
  //     font-size: 14px;
  //     line-height: 11px;
  //   `}
  // `
  return (
    <p {...props} className={clsx('title-ibm-2', className)}>
      {children}
    </p>
  )
  // return createElement(
  //   component,
  //   {
  //     className: clsx('title-ibm-2', className),
  //     ...props,
  //   },
  //   children
  // )
  // <TypographyIBMH5 component={component} {...props}>
  //   {children}
  // </TypographyIBMH5>
  // <p className={clsx('title-ibm-2', props.className)}>{children}</p>
}
