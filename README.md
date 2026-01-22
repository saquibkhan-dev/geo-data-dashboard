# Geo Data Dashboard

This project is a small React-based geo data dashboard built as part of a frontend assignment.
The goal was to demonstrate clean component design, performance-aware rendering, and clear
separation between data and UI concerns.

---

## Tech Stack

- React 18 (Vite)
- MUI (DataGrid for table virtualization)
- Leaflet + react-leaflet (map rendering)
- Local state management using React hooks only

No global state library was used intentionally, as the state scope is limited and predictable.

---

## Key Architectural Decisions

### Data Fetching & State
- Data fetching is isolated in a service layer to keep UI components clean.
- A custom `useGeoData` hook handles pagination, loading state, and normalization.
- Selection state is handled via a small custom hook to keep the Dashboard component declarative.

### Table Implementation
- MUI DataGrid was chosen to handle large datasets efficiently.
- Virtualization ensures smooth performance with 5k+ rows.
- Server-side pagination mode is used to mirror real backend behavior.

### Map Integration
- Leaflet was chosen over Mapbox to avoid API keys and keep setup simple.
- Map and table share a single source of truth for selection.
- Clicking a table row highlights the corresponding marker and vice versa.

### Performance Considerations
- Table columns and map markers are memoized to avoid unnecessary re-renders.
- Stable callbacks are used to keep render cycles predictable.
- Marker icons are reused instead of being recreated per render.

---

## Trade-offs & Assumptions

- Marker clustering was not added as the assignment scope did not require it,
  but it would be the next step for larger datasets.
- Filtering and sorting are client-side, assuming manageable dataset size per page.
- Mock data simulates real API pagination rather than fetching all data at once.

---

## Screenshots / Recording

![Screenshot](./ScreenRECORDING/Screenshot%202026-01-22%20200639.png)

Short demo video showing table sorting, pagination, and map synchronization:[Demo Vedio](./ScreenRECORDING/Geo-Dashboard.mp4)
---

## Time Spent

Approx. **6–7 hours**, spread across:
- Initial setup and architecture
- Data handling and table performance
- Map integration and synchronization
- Final optimization and cleanup

---

## Running the Project

```bash
npm install
npm run dev
