Process(detail: any[]) {
    let hotelPromises: Promise<any>[] = [];
    let smockPromises: Promise<any>[] = [];
  
    if (detail.length > 0) {
      detail.forEach(item => {
        if (item.type === "HOTEL") {
          hotelPromises.push(this.SearchHotel(item.reserv_detail_id));
        } else {
          smockPromises.push(this.SearchSmock(item.reserv_detail_id));
        }
      });
  
      // Wait for all promises to resolve
      Promise.all([...hotelPromises, ...smockPromises]).then(results => {
        let hotelDetails = results.filter((result, index) => index < hotelPromises.length);
        let smockDetails = results.filter((result, index) => index >= hotelPromises.length);
        
        // Process results
        console.log('Hotel Details:', hotelDetails);
        console.log('Smock Details:', smockDetails);
  
        // Combine or further process the results as needed
      }).catch(error => {
        console.error('An error occurred:', error);
      });
    }
  }
  
  SearchSmock(id: number): Promise<any> {
    let sql = `select a.* 
               FROM OP_DOC_CTRL.dbo.reservation_smock_esd a
               WHERE a.reserv_detail_id = ${id}`;
    return this.cust_api.runQuery(sql).toPromise().then((resp: any) => {
      return resp.data;
    });
  }
  
  SearchHotel(id: number): Promise<any> {
    let sql = `select a.* 
               FROM OP_DOC_CTRL.dbo.reservation_hotel a
               WHERE a.reserv_detail_id = ${id}`;
    return this.cust_api.runQuery(sql).toPromise().then((resp: any) => {
      return resp.data;
    });
  }
  ////////////////////
  Process(detail: any[]) {
    let hotelPromises: Promise<any>[] = [];
    let smockPromises: Promise<any>[] = [];
  
    if (detail.length > 0) {
      detail.forEach(item => {
        if (item.type === "HOTEL") {
          hotelPromises.push(this.SearchHotel(item.reserv_detail_id));
        } else {
          smockPromises.push(this.SearchSmock(item.reserv_detail_id));
        }
      });
  
      // Combine promises into an object
      const promises = {
        hotel: Promise.all(hotelPromises),
        smock: Promise.all(smockPromises)
      };
  
      // Wait for all promises to resolve
      Promise.all(Object.values(promises)).then(results => {
        const finalResults = Object.fromEntries(
          Object.keys(promises).map((key, index) => [key, results[index]])
        );
  
        // Process final results
        console.log(finalResults);
        // Further processing as needed
  
      }).catch(error => {
        console.error('An error occurred:', error);
      });
    }
  }
  
  SearchSmock(id: number): Promise<any> {
    let sql = `select a.* 
               FROM OP_DOC_CTRL.dbo.reservation_smock_esd a
               WHERE a.reserv_detail_id = ${id}`;
    return this.cust_api.runQuery(sql).toPromise().then((resp: any) => {
      return resp.data; // Return the data part of the response
    });
  }
  
  SearchHotel(id: number): Promise<any> {
    let sql = `select a.* 
               FROM OP_DOC_CTRL.dbo.reservation_hotel a
               WHERE a.reserv_detail_id = ${id}`;
    return this.cust_api.runQuery(sql).toPromise().then((resp: any) => {
      return resp.data; // Return the data part of the response
    });
  }
  