import { type ComponentPropsWithoutRef, type ElementType, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { classNames, Link } from '@edgeandnode/gds'
import { Link as LinkIcon } from '@edgeandnode/gds/icons'

import { useI18n } from '@/i18n'
import { MDXContentContext } from '@/Layout'

interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
  as?: ElementType
}

const BaseHeading = ({ as: Element = 'h1', id, className, children, ...props }: HeadingProps) => {
  const { markHeading } = useContext(MDXContentContext)!
  const { t } = useI18n()

  const { ref, inView: inOrAboveView } = useInView({
    rootMargin: '99999px 0px -60% 0px', // consider it "in or above view" if it's above 60% from the bottom of the viewport
  })

  useEffect(
    () => {
      if (!id) return
      markHeading(id, inOrAboveView)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, inOrAboveView],
  )

  return (
    <Element ref={ref} id={id} className={classNames(['group/heading', className])} {...props}>
      {children}
      {id ? (
        <span
          className={`
            absolute end-[calc(100%+theme(spacing.3))] top-0 opacity-0 transition
            group-hocus-visible-within/heading:opacity-100
            max-md:hidden
          `}
        >
          {/* TODO: Use `ExperimentalLink` or naked `ExperimentalButton` */}
          <Link inline underline={false} href={`#${id}`}>
            <LinkIcon alt={t('global.page.linkToThisSection')} className="prop-size-[0.85em]" />
          </Link>
        </span>
      ) : null}
    </Element>
  )
}

const H1 = (props: HeadingProps) => {
  return <BaseHeading as="h1" {...props} />
}

const H2 = (props: HeadingProps) => {
  return <BaseHeading as="h2" {...props} />
}

const H3 = (props: HeadingProps) => {
  return <BaseHeading as="h3" {...props} />
}

const H4 = (props: HeadingProps) => {
  return <BaseHeading as="h4" {...props} />
}

const H5 = (props: HeadingProps) => {
  return <BaseHeading as="h5" {...props} />
}

const H6 = (props: HeadingProps) => {
  return <BaseHeading as="h6" {...props} />
}

const Heading = Object.assign({}, BaseHeading, {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
})

export { Heading }
