import 'react-three-xr'

declare module 'react-three-xr' {
  interface XRStore {
    /** Optional XR session for ending VR/AR sessions */
    session?: {
      end: () => void
    }
  }
}
