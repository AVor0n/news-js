type ResponseSources =
    | {
          readonly status: 'ok';
          readonly sources: Array<Source>;
      }
    | ErrorResponse;
