# Next.js 15 Hydration Mismatch with Custom Components

This repository demonstrates a hydration mismatch issue in Next.js 15 that occurs when using a custom component within a page component. The error is not immediately apparent in the component's code, making debugging challenging.

## Problem

A Next.js application using a custom component throws an error relating to hydration mismatch during the rendering process.  The custom component functions correctly when rendered in isolation, but fails when integrated into a page.  This may involve differences in the client-side and server-side rendering leading to an inconsistency in the DOM.

## Solution

The solution involves ensuring the client-side and server-side rendering outputs of the component match precisely. This often requires careful examination of the component's props, state, and rendering logic to identify discrepancies.  Debugging tools and techniques such as inspecting the rendered HTML can reveal inconsistencies.

## Setup

1. Clone the repo.
2. Run `npm install`
3. Run `npm run dev`