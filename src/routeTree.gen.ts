/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardRouteImport } from './routes/dashboard/route'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as DashboardFormsImport } from './routes/dashboard/forms'
import { Route as CatCatTypeImport } from './routes/cat/$catType'

// Create/Update Routes

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardFormsRoute = DashboardFormsImport.update({
  id: '/forms',
  path: '/forms',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const CatCatTypeRoute = CatCatTypeImport.update({
  id: '/cat/$catType',
  path: '/cat/$catType',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/cat/$catType': {
      id: '/cat/$catType'
      path: '/cat/$catType'
      fullPath: '/cat/$catType'
      preLoaderRoute: typeof CatCatTypeImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/forms': {
      id: '/dashboard/forms'
      path: '/forms'
      fullPath: '/dashboard/forms'
      preLoaderRoute: typeof DashboardFormsImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardRouteImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteRouteChildren {
  DashboardFormsRoute: typeof DashboardFormsRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardFormsRoute: DashboardFormsRoute,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/cat/$catType': typeof CatCatTypeRoute
  '/dashboard/forms': typeof DashboardFormsRoute
  '/dashboard/': typeof DashboardIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cat/$catType': typeof CatCatTypeRoute
  '/dashboard/forms': typeof DashboardFormsRoute
  '/dashboard': typeof DashboardIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/cat/$catType': typeof CatCatTypeRoute
  '/dashboard/forms': typeof DashboardFormsRoute
  '/dashboard/': typeof DashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/cat/$catType'
    | '/dashboard/forms'
    | '/dashboard/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/cat/$catType' | '/dashboard/forms' | '/dashboard'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/cat/$catType'
    | '/dashboard/forms'
    | '/dashboard/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  CatCatTypeRoute: typeof CatCatTypeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  CatCatTypeRoute: CatCatTypeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/cat/$catType"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard/route.tsx",
      "children": [
        "/dashboard/forms",
        "/dashboard/"
      ]
    },
    "/cat/$catType": {
      "filePath": "cat/$catType.tsx"
    },
    "/dashboard/forms": {
      "filePath": "dashboard/forms.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
