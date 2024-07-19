export type ContractCalendarType = {
  addEventSchedule: (
    id: number, 
    start_event: number, 
    end_event: number, 
    store_index: number, 
    store_title: string, 
    title_event: string, 
    month_range: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  createEventStore: (title: string) => any
  deleteEventSchedule: (
    store_index: number, 
    event_id: number, 
    month_range: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  deleteEventScheduleMonth: (
    store_index: number, 
    month_range: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  editEventSchedule: (
    store_index: number, 
    event_id: number, 
    start_event: number, 
    end_event: number, 
    month_range: string, 
    title: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  editEventStoreTitle: (
    store_index: number, 
    new_store_title: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  getEventSchedule: (
    store_index: number, 
    month_range: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  getEventTitle: () => any
  getParticipationStore: (
    store_index: number, 
    store_title: string, 
    month_range: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  getParticipationTitle: () => any
  inviteParticipation: (
    store_index: number, 
    title: string, 
    invitation_account: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  leaveParticipationEvent: (
    store_index: number, 
    store_title: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  removeAccountParticipation: (
    store_index: number, 
    participationAccount: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  removeAllAccountParticipations: (store_index: number) => any
};