.PHONY: taxes-db-up
taxes-db-up:
	docker run \
		--rm \
		-it \
		--publish 15432:5432 \
		-v $(PWD)/dev/taxes.sql\:/docker-entrypoint-initdb.d/taxes.sql \
		-e POSTGRES_PORT=5432 \
		-e POSTGRES_USER=baltimore \
		-e POSTGRES_PASSWORD=baltimore \
		-e POSTGRES_DB=baltimore \
		-e PGDATA=/pgdata \
		postgres