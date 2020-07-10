import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ShareModalContent from 'src/overview/sharing/components/ShareModalContent'
import ShareNonPioneerInfo from 'src/overview/sharing/components/ShareNonPioneerInfo'

const stories = storiesOf('Sharing', module)

stories.add('Modal content - private', () => (
    <ShareModalContent
        collectionName={'Reading List'}
        isPublic={false}
        isUploading={false}
        onClickToggle={() => {}}
        onClickLetUsKnow={() => {}}
        onClickViewRoadmap={() => {}}
    />
))

stories.add('Modal content - public', () => (
    <ShareModalContent
        collectionName={'Reading List'}
        isPublic={boolean('isPublic', true)}
        isUploading={false}
        shareUrl={'https://memex.social/collections/jdfjf81d'}
        onClickToggle={() => {}}
        onClickLetUsKnow={() => {}}
        onClickViewRoadmap={() => {}}
    />
))

stories.add('Modal content - public & uploading', () => (
    <ShareModalContent
        collectionName={'Reading List'}
        isPublic={boolean('isPublic', true)}
        isUploading
        shareUrl={'https://memex.social/collections/jdfjf81d'}
        onClickToggle={() => {}}
        onClickLetUsKnow={() => {}}
        onClickViewRoadmap={() => {}}
    />
))

stories.add('Modal content - not a pioneer', () => (
    <ShareNonPioneerInfo onClickUpgrade={() => {}} />
))

stories.addDecorator(withKnobs)