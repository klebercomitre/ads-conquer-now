CREATE TABLE public.site_content (
  id TEXT NOT NULL DEFAULT 'main' PRIMARY KEY,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site content"
  ON public.site_content FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can update site content"
  ON public.site_content FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert site content"
  ON public.site_content FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_site_content_updated_at
  BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.site_content (id, content) VALUES ('main', '{}'::jsonb);