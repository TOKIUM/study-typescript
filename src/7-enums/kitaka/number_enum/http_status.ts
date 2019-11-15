enum HttpStatuses {
  CONTINUE = 100,
  OK = 200,
  NOT_FOUND = 404,
  I_AM_A_TEAPOD = 418
}

type KnownStatuses = keyof typeof HttpStatuses;

// そもそも知らない http status を受け付けない不親切設計...
const getStatusCode = (code: KnownStatuses): number => {
  return HttpStatuses[code];
};

export default getStatusCode;
