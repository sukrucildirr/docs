import { NetworkType } from '@pinax/graph-networks-registry'
import { useData } from 'nextra/hooks'
import type { ComponentPropsWithoutRef } from 'react'

import { classNames, ExperimentalLink, Tooltip } from '@edgeandnode/gds'
import {
  Clock,
  Firehose,
  GraphExplorer,
  GraphNode,
  SocialYouTube,
  Subgraph,
  Substreams,
  SubstreamsPoweredSubgraph,
} from '@edgeandnode/gds/icons'
import { NetworkIcon } from '@edgeandnode/go'

import { Card, Heading } from '@/components'
import { useI18n } from '@/i18n'
import { getSupportedNetworks } from '@/supportedNetworks'

export default function HomePage() {
  const { t } = useI18n()

  return (
    <>
      <div className="graph-docs-not-markdown grid grid-cols-subgrid">
        <div className="absolute inset-x-0 -top-8 flex h-72 justify-center pointer-events-none xs:h-90">
          <img alt="" src={`${process.env.BASE_PATH}/img/home-bg.svg`} className="h-full max-w-none" />
        </div>
        <div className="col-[container] py-20 xs:py-30">
          <div className="max-w-120">
            <h1 className="text-heading-xlarge text-white">{t('index.hero.title')}</h1>
            <p className="mt-2">{t('index.hero.description')}</p>
            {/*
              <ExperimentalButtonGroup className="mt-4 prop-orientation-vertical xs:prop-orientation-horizontal">
                <ExperimentalButton href="/about/">{t('index.hero.cta1')}</ExperimentalButton>
                <ExperimentalButton href="/subgraphs/quick-start/">{t('index.hero.cta2')}</ExperimentalButton>
              </ExperimentalButtonGroup>
            */}
          </div>
        </div>
      </div>
      <div className="col-[container] nested-[p:empty]:hidden">
        <section>
          <Heading.H2 id="products">{t('index.products.title')}</Heading.H2>
          <p>{t('index.products.description')}</p>
          <div className="graph-docs-not-markdown mt-8 grid gap-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Card
                title={t('index.products.subgraphs.title')}
                description={t('index.products.subgraphs.description')}
                cta={
                  <ExperimentalLink href="/subgraphs/quick-start/">
                    {t('index.products.subgraphs.cta')}
                  </ExperimentalLink>
                }
                icon={
                  <div className="flex size-8 items-center justify-center rounded-4 bg-purple text-white">
                    <Subgraph size={4} />
                  </div>
                }
                iconPosition="side"
              />
              <Card
                title={t('index.products.substreams.title')}
                description={t('index.products.substreams.description')}
                cta={
                  <ExperimentalLink href="/substreams/quick-start/">
                    {t('index.products.substreams.cta')}
                  </ExperimentalLink>
                }
                icon={
                  <div className="flex size-8 items-center justify-center rounded-4 bg-pink text-white">
                    <Substreams size={4} />
                  </div>
                }
                iconPosition="side"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Card
                title={t('index.products.sps.title')}
                description={t('index.products.sps.description')}
                cta={<ExperimentalLink href="/sps/tutorial/">{t('index.products.sps.cta')}</ExperimentalLink>}
                icon={
                  <div className="flex size-8 items-center justify-center rounded-4 bg-space-1400 text-white">
                    <SubstreamsPoweredSubgraph size={4} />
                  </div>
                }
              />
              <Card
                title={t('index.products.graphNode.title')}
                description={t('index.products.graphNode.description')}
                cta={
                  <ExperimentalLink href="/indexing/tooling/graph-node/">
                    {t('index.products.graphNode.cta')}
                  </ExperimentalLink>
                }
                icon={
                  <div className="flex size-8 items-center justify-center rounded-4 bg-space-1400 text-white">
                    <GraphNode size={4} />
                  </div>
                }
              />
              <Card
                title={t('index.products.firehose.title')}
                description={t('index.products.firehose.description')}
                cta={
                  <ExperimentalLink href="/indexing/tooling/firehose/">
                    {t('index.products.firehose.cta')}
                  </ExperimentalLink>
                }
                icon={
                  <div className="flex size-8 items-center justify-center rounded-4 bg-space-1400 text-white">
                    <Firehose size={4} />
                  </div>
                }
              />
            </div>
          </div>
        </section>

        <hr />

        <section>
          <Heading.H2 id="supported-networks">{t('index.supportedNetworks.title')}</Heading.H2>
          <p>
            {t('index.supportedNetworks.description.base', [
              <ExperimentalLink key="link-1" href="/supported-networks/">
                90+ {t('index.supportedNetworks.description.networks')}
              </ExperimentalLink>,
              <ExperimentalLink key="link" href="https://edgeandnode.typeform.com/to/b3507xSL">
                {t('index.supportedNetworks.description.completeThisForm')}
              </ExperimentalLink>,
            ])}
          </p>
          <SupportedNetworks className="mt-8" />
        </section>

        <hr />

        <section>
          <Heading.H2 id="guides">{t('index.guides.title')}</Heading.H2>
          <p>{t('index.guides.description')}</p>
          <div className="graph-docs-not-markdown mt-8 grid gap-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Card
                href="/subgraphs/explorer/"
                title={t('index.guides.explorer.title')}
                description={t('index.guides.explorer.description')}
                icon={<GraphExplorer alt="" />}
                slotAboveTitle={<Time variant="reading" minutes={10} />}
              />
              <Card
                href="/subgraphs/developing/publishing/publishing-a-subgraph/"
                title={t('index.guides.publishASubgraph.title')}
                description={t('index.guides.publishASubgraph.description')}
                icon={<Subgraph alt="" />}
                slotAboveTitle={<Time variant="reading" minutes={3} />}
              />
              <Card
                href="/substreams/publishing/"
                title={t('index.guides.publishSubstreams.title')}
                description={t('index.guides.publishSubstreams.description')}
                icon={<Substreams alt="" />}
                slotAboveTitle={<Time variant="duration" minutes={3} />}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Card
                href="/subgraphs/querying/best-practices/"
                title={t('index.guides.queryingBestPractices.title')}
                description={t('index.guides.queryingBestPractices.description')}
                slotAboveTitle={<Time variant="reading" minutes={9} />}
              />
              <Card
                href="/subgraphs/cookbook/timeseries/"
                title={t('index.guides.timeseries.title')}
                description={t('index.guides.timeseries.description')}
                slotAboveTitle={<Time variant="reading" minutes={4} />}
              />
              <Card
                href="/subgraphs/querying/managing-api-keys/"
                title={t('index.guides.apiKeyManagement.title')}
                description={t('index.guides.apiKeyManagement.description')}
                slotAboveTitle={<Time variant="reading" minutes={2} />}
              />
              <Card
                href="/subgraphs/cookbook/transfer-to-the-graph/"
                title={t('index.guides.transferToTheGraph.title')}
                description={t('index.guides.transferToTheGraph.description')}
                slotAboveTitle={<Time variant="reading" minutes={3} />}
              />
            </div>
          </div>
        </section>

        <hr />

        <section>
          <div className="flex items-end justify-between">
            <Heading.H2 id="videos" className="+:m-0">
              {t('index.videos.title')}
            </Heading.H2>
            <ExperimentalLink
              href="https://www.youtube.com/@GraphProtocol"
              target="_blank"
              iconBefore={<SocialYouTube alt="" />}
              className="top-[-3px] text-14 text-space-200"
            >
              <span className="max-lg:hidden">{t('index.videos.watchOnYouTube')}</span>
              <span className="lg:hidden">YouTube</span>
            </ExperimentalLink>
          </div>
          <div className="graph-docs-not-markdown mt-8 grid grid-cols-1 gap-4">
            <Card
              href="https://www.youtube.com/watch?v=hn-sJUpZ_aM"
              title={t('index.videos.theGraphExplained.title')}
              description={t('index.videos.theGraphExplained.description')}
              slotBelowDescription={<Time variant="duration" minutes={1} className="mt-1" />}
              videoThumbnailSrc={`${process.env.BASE_PATH}/img/video-theGraphExplained.jpg`}
            />
            <Card
              href="https://www.youtube.com/watch?v=VACg8bitnVc"
              title={t('index.videos.whatIsDelegating.title')}
              description={t('index.videos.whatIsDelegating.description')}
              slotBelowDescription={<Time variant="duration" minutes={4} className="mt-1" />}
              videoThumbnailSrc={`${process.env.BASE_PATH}/img/video-whatIsDelegating.jpg`}
            />
            <Card
              href="https://www.youtube.com/watch?v=RmKi-Nq9E_A"
              title={t('index.videos.howToIndexSolana.title')}
              description={t('index.videos.howToIndexSolana.description')}
              slotBelowDescription={<Time variant="duration" minutes={5} className="mt-1" />}
              videoThumbnailSrc={`${process.env.BASE_PATH}/img/video-howToIndexSolana.jpg`}
            />
          </div>
        </section>
      </div>
    </>
  )
}

interface TimeProps extends ComponentPropsWithoutRef<'div'> {
  variant: 'reading' | 'duration'
  minutes: number
}

function Time({ variant, minutes, className, ...props }: TimeProps) {
  const { t } = useI18n()
  return (
    <div className={classNames(['flex items-center gap-1 leading-none', className])} {...props}>
      <Clock
        alt={variant === 'reading' ? t('index.time.reading') : t('index.time.duration')}
        variant="fill"
        size={3.5}
      />
      {minutes} {t('index.time.minutes')}
    </div>
  )
}

function SupportedNetworks({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const { supportedNetworks } = useData() as { supportedNetworks: Awaited<ReturnType<typeof getSupportedNetworks>> }

  return (
    <div
      className={classNames(['graph-docs-not-markdown overflow-clip rounded-8 border border-space-1500', className])}
      {...props}
    >
      <ul className="grid grid-cols-auto-fill-16 gap-px text-space-500">
        {supportedNetworks
          // TODO: Don't filter out testnets that don't have a mainnet
          .filter((network) => network.networkType === NetworkType.Mainnet)
          // Filter out networks that are either duplicates (same logo, same or similar short name) or irrelevant in this view
          .filter(
            (network) =>
              !network.caip2Id.startsWith('beacon:') &&
              !['boba-bnb', 'eos-evm', 'polygon-zkevm', 'solana-accounts'].includes(network.id),
          )
          // TODO: Fix Zora mono logo in web3icons
          .filter((network) => network.id !== 'zora')
          .map((network) => (
            <Tooltip key={network.id} content={network.shortName}>
              <li className="-mb-px -mr-px flex aspect-square items-center justify-center border-b border-r border-space-1500 transition hover:bg-space-1600">
                <NetworkIcon caip2Id={network.caip2Id as any} size={6} />
              </li>
            </Tooltip>
          ))}
      </ul>
    </div>
  )
}
