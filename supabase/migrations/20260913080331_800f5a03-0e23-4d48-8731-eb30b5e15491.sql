CREATE TABLE public.book_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_slug TEXT NOT NULL CHECK (char_length(book_slug) BETWEEN 2 AND 100),
  book_title TEXT NOT NULL CHECK (char_length(book_title) BETWEEN 2 AND 180),
  format TEXT NOT NULL CHECK (format IN ('pdf', 'printed')),
  price_rwf INTEGER NOT NULL CHECK (price_rwf IN (3000, 20000)),
  customer_name TEXT NOT NULL CHECK (char_length(customer_name) BETWEEN 2 AND 100),
  phone TEXT NOT NULL CHECK (phone ~ '^\+?[0-9 ]{9,20}$'),
  email TEXT CHECK (email IS NULL OR char_length(email) <= 255),
  district TEXT CHECK (district IS NULL OR char_length(district) <= 100),
  delivery_address TEXT CHECK (delivery_address IS NULL OR char_length(delivery_address) <= 500),
  status TEXT NOT NULL DEFAULT 'payment_requested' CHECK (status IN ('payment_requested', 'paid', 'fulfilled', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT printed_delivery_details CHECK (
    format = 'pdf' OR (
      district IS NOT NULL AND char_length(trim(district)) >= 2
      AND delivery_address IS NOT NULL AND char_length(trim(delivery_address)) >= 5
    )
  )
);

GRANT INSERT ON public.book_orders TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.book_orders TO service_role;

ALTER TABLE public.book_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit book order requests"
ON public.book_orders
FOR INSERT
TO anon, authenticated
WITH CHECK (
  status = 'payment_requested'
  AND price_rwf = CASE WHEN format = 'pdf' THEN 3000 ELSE 20000 END
);

CREATE OR REPLACE FUNCTION public.update_book_orders_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_book_orders_updated_at
BEFORE UPDATE ON public.book_orders
FOR EACH ROW
EXECUTE FUNCTION public.update_book_orders_updated_at();