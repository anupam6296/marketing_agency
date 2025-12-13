# API Documentation

## Leads API

### Create Lead
Submit a new contact form entry.

- **Endpoint**: `POST /api/leads`
- **Content-Type**: `application/json`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc", // optional
  "budget": "5k-10k",    // optional
  "message": "I need a new website."
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "leadId": "uuid-string"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Missing required fields"
}
```

---

## Admin Actions (Server Actions)

### Update Lead Status
Updates the status of a lead in the database.

- **Function**: `updateLeadStatus(id: string, status: string)`
- **Path**: `src/app/admin/actions.ts`
- **Allowed Statuses**: `NEW`, `CONTACTED`, `WON`, `LOST`

**Usage:**
```typescript
import { updateLeadStatus } from '@/app/admin/actions';
await updateLeadStatus('lead-id', 'WON');
```
